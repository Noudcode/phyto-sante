import React from "react";
import { notFound } from "next/navigation";
import ProductDetailView from "@/components/boutique/ProductDetailView";
import { getProductByIdOrSlug, productsData } from "@/data/products";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
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
  const product = getProductByIdOrSlug(id);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} />;
}
