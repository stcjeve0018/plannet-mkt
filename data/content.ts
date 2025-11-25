export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  slogan: string;
  description: string;
  navItems: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: "Plannet MKT",
  slogan: "數據驅動行銷，技術打造體驗",
  description: "我們提供頂尖的網頁開發、精準廣告投放以及全方位的數位口碑行銷服務。",
  navItems: [
    { label: "首頁", href: "/" },
    { label: "服務項目", href: "/services" },
    { label: "聯絡我們", href: "/contact" },
  ],
};