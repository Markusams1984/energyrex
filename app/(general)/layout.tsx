import { Backdrop } from "@/components/backdrop";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Backdrop as="main">{children}</Backdrop>;
}
