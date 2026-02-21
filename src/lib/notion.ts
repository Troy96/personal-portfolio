import { Client } from "@notionhq/client";
import type { NowItem } from "@/types";

function getNotionClient() {
  return new Client({ auth: process.env.NOTION_API_KEY });
}

type NotionPage = {
  id: string;
  properties: Record<string, unknown>;
};

function getTitle(prop: unknown): string {
  const p = prop as { title?: { plain_text: string }[] };
  return p.title?.[0]?.plain_text ?? "";
}

function getSelect(prop: unknown): string {
  const p = prop as { select?: { name: string } | null };
  return p.select?.name ?? "";
}

function getRichText(prop: unknown): string {
  const p = prop as { rich_text?: { plain_text: string }[] };
  return p.rich_text?.[0]?.plain_text ?? "";
}

function getUrl(prop: unknown): string | undefined {
  const p = prop as { url?: string | null };
  return p.url ?? undefined;
}

function getDate(prop: unknown): string | undefined {
  const p = prop as { date?: { start?: string } | null };
  return p.date?.start ?? undefined;
}

function getNumber(prop: unknown): number | undefined {
  const p = prop as { number?: number | null };
  return p.number ?? undefined;
}

function getFileUrl(prop: unknown): string | undefined {
  const p = prop as {
    files?: { file?: { url: string }; external?: { url: string } }[];
  };
  const file = p.files?.[0];
  return file?.file?.url ?? file?.external?.url ?? undefined;
}

export async function fetchNowItems(): Promise<NowItem[]> {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_NOW_DATABASE_ID) {
    return [];
  }

  try {
    const notion = getNotionClient();
    const response = await notion.dataSources.query({
      data_source_id: process.env.NOTION_NOW_DATABASE_ID,
      sorts: [
        { property: "Order", direction: "ascending" },
        { property: "Date", direction: "descending" },
      ],
    });

    return response.results.map((page) => {
      const p = (page as NotionPage).properties;
      return {
        id: page.id,
        title: getTitle(p.Title),
        category: getSelect(p.Category) as NowItem["category"],
        status: getSelect(p.Status) as NowItem["status"],
        description: getRichText(p.Description) || undefined,
        imageUrl: getFileUrl(p.Image),
        link: getUrl(p.Link),
        date: getDate(p.Date),
        order: getNumber(p.Order),
      };
    });
  } catch (error) {
    console.error("Failed to fetch Now items from Notion:", error);
    return [];
  }
}
