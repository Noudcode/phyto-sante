import React from "react";
import { notFound, redirect } from "next/navigation";
import ProductDetailView from "@/components/boutique/ProductDetailView";
import { getProductByIdOrSlug, productsData } from "@/data/products";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  if (id === "prod-ak47" || id === "ak-47") {
    return {
      title: "AK 47 – Dûre au lit — Cabinet Phyto Santé",
    };
  }
  const product = getProductByIdOrSlug(id);

  if (!product) {
    return {
      title: "Produit non trouvé — Cabinet Phyto Santé",
    };
  }

  return {
    title: `${product.name} — Cabinet Phyto Santé`,
    description: product.shortDescription || product.description,
  };
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  if (id === "prod-ak47" || id === "ak-47") {
    redirect("/produits/ak-47");
  }
  const product = getProductByIdOrSlug(id);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} />;
}
