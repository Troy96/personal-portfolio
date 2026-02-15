"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const API_URL = "https://visitor.6developer.com/visit";
const DOMAIN = "tuhinroy.in";

export function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ domain: DOMAIN }),
    })
      .then((res) => res.json())
      .then((data) => setCount(data.totalCount))
      .catch(() => {});
  }, []);

  if (count === null) return null;

  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400">
      <Eye size={14} />
      {count.toLocaleString()} visits
    </span>
  );
}
