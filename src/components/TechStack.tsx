"use client";
import React from "react";
import { useI18n } from "../lib/I18nProvider";
import { motion } from "framer-motion";
import { TECHS, TechItem } from "@/data/technologies";
import * as Icons from "react-icons/si";
import type { Skills } from "@/lib/types";
import type { IconType } from "react-icons";

export default function TechStack() {
  const { t } = useI18n();

  const skills: Skills = t?.skills;

  return (
    <section className="container py-12 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-lg font-semibold">{skills.title}</h2>

        <div className="mt-6 space-y-8">
          {Object.entries(skills.categories).map(([key, cat]) => (
            <div key={key}>
              <h3 className="font-medium text-base mb-3">{cat.title}</h3>

              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
              >
                {cat.list.map((techId) => {
                  const tech: TechItem = TECHS[techId];

                  const iconName = tech.icon;
                  const Icon = (Icons as Record<string, IconType>)[iconName];

                  return (
                    <motion.li
                      key={tech.id}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3 rounded-md bg-card p-3 text-sm"
                    >
                      <div
                        className="rounded-md p-2"
                        style={{ background: `${tech.color}20` }}
                      >
                        <Icon size={20} color={tech.color} />
                      </div>

                      <span className="font-medium">{tech.name}</span>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
