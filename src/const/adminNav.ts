import { Layout, Package, Receipt } from "@phosphor-icons/react";

const adminNav = [
  {
    name: "Dashboards",
    icon: Layout,
    nested: false,
    link: "/admin",
  },
  {
    name: "Transaksi",
    icon: Receipt,
    nested: false,
    link: "/admin/transaksi",
  },
  {
    name: "Produk",
    icon: Package,
    nested: true,
    nav: [
      {
        name: "Kategori Produk",
        link: "/admin/kategori-produk",
      },
      {
        name: "Produk",
        link: "/admin/produk",
      },
    ],
  },
];

export default adminNav;
