"use client";
import { useAppSelector } from "@/lib/hooks";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme: string = useAppSelector((state) => state.themeReducer.theme);
  return <div data-theme={theme}>{children}</div>;
}
