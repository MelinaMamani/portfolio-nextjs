"use client";
import React from "react";
import { useI18n } from "../lib/I18nProvider";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Cloud,
  Server,
  Layers,
  Terminal,
  Box,
  BoxSelect,
} from "lucide-react";
import type { Tech as DataTech } from "../data/technologies";

type Props = {
  techs?: DataTech[];
};

type LucideComponent = React.ComponentType<
  {
    size?: number;
    color?: string;
  } & React.SVGProps<SVGSVGElement>
>;

const ICON_MAP: Record<string, LucideComponent> = {
  TypeScript: Code,
  "Next.js": Layers,
  React: Code,
  "Node.js": Server,
  Tailwind: Cloud,
  GraphQL: Terminal,
  PostgreSQL: Database,
  "Apollo Client": Box,
};

export default function TechStack({ techs = [] }: Props) {
  const { t } = useI18n();
  return (
    <section className="container py-12 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-lg font-semibold">{t?.tech?.title ?? ""}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t?.tech?.description ?? ""}
        </p>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {},
          }}
          className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6"
        >
          {techs.length === 0 ? (
            <div className="col-span-full text-sm text-muted-foreground">
              {t?.tech?.no_technologies ?? ""}
            </div>
          ) : (
            techs.map((t) => {
              const Icon = ICON_MAP[t.name] ?? Code;
              return (
                <motion.li
                  key={t.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 rounded-md bg-card p-3 text-sm"
                >
                  <div
                    className="rounded-md p-2"
                    style={{ background: `${t.color ?? "#000"}20` }}
                  >
                    <Icon size={20} color={t.color ?? "#000"} />
                  </div>
                  <span className="font-medium">{t.name}</span>
                </motion.li>
              );
            })
          )}
        </motion.ul>
      </div>
    </section>
  );
}
