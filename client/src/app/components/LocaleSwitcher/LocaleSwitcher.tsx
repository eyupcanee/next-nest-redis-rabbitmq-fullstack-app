import React, { ChangeEvent, useTransition } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const languageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return <div>LocaleSwitcher</div>;
}
