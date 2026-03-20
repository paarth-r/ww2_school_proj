import { VisitChrome } from "@/components/visit/VisitChrome";
import "./visit.css";

export default function VisitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <VisitChrome>{children}</VisitChrome>;
}
