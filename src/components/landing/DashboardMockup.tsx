"use client";

import { motion } from "framer-motion";

export function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="overflow-hidden rounded-[1.5rem] border border-slate-200/90 bg-white shadow-[0_28px_70px_-34px_rgba(15,23,42,0.18)]"
    >
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/90 px-4 py-3">
        <span className="text-sm font-semibold text-sky-700">CareBridge</span>
        <div className="hidden flex-1 justify-center sm:flex">
          <span className="rounded-full bg-white px-4 py-1.5 text-xs text-slate-400 shadow-sm ring-1 ring-slate-200/80">
            Today · symptom overview
          </span>
        </div>
        <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 shadow-sm" />
      </div>
      <div className="grid gap-0 lg:grid-cols-[140px_1fr]">
        <aside className="hidden border-r border-slate-100 bg-slate-50/80 p-3 lg:block">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Navigate
          </p>
          <ul className="mt-3 space-y-1 text-[12px] font-medium text-slate-500">
            <li className="rounded-lg bg-white px-2 py-2 text-sky-700 shadow-sm ring-1 ring-sky-100">
              Overview
            </li>
            <li className="px-2 py-2">Symptoms</li>
            <li className="px-2 py-2">Labs</li>
            <li className="px-2 py-2">Care team</li>
          </ul>
        </aside>
        <div className="space-y-4 p-4 sm:p-5">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Your health
              </p>
              <p className="text-lg font-semibold text-slate-900">Stable this week</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-800 ring-1 ring-emerald-100">
              On track
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { label: "O₂", val: "99%", sub: "saturation" },
              { label: "Heart", val: "72", sub: "bpm" },
              { label: "Rest", val: "7.5h", sub: "sleep" },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-slate-100 bg-slate-50/90 px-3 py-3 shadow-sm"
              >
                <p className="text-[10px] font-medium text-slate-500">{m.label}</p>
                <p className="mt-1 text-lg font-semibold tabular-nums text-slate-900">
                  {m.val}
                </p>
                <p className="text-[10px] text-slate-400">{m.sub}</p>
              </div>
            ))}
          </div>
          <div className="h-24 rounded-2xl bg-gradient-to-br from-sky-100 via-white to-slate-50 p-3 ring-1 ring-slate-100">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              7-day pattern
            </p>
            <div className="mt-3 flex h-12 items-end gap-1">
              {[45, 62, 38, 70, 55, 48, 52].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-sky-500 to-sky-400/70"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm">
              <p className="text-[10px] text-slate-500">Next step</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                Hydration & rest
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm">
              <p className="text-[10px] text-slate-500">Guidance</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">Monitor 24h</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
