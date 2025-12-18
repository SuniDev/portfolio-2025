"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-up");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.25em] text-electric-blue/70">
          About Me
        </p>
        <h2 className="bg-gradient-to-r from-electric-blue via-white to-electric-blue bg-clip-text text-3xl font-semibold leading-tight text-transparent sm:text-4xl">
            Crafting iOS Experiences
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3">
        {/* Main Profile Card - Large */}
        <div
          ref={(el) => {
            cardRefs.current[0] = el;
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/8 p-8 backdrop-blur-xl transition-all duration-500 hover:border-electric-blue/30 hover:bg-white/12 sm:col-span-2 lg:col-span-2 lg:row-span-2"
          style={{ animationDelay: "0ms" }}
        >
          <div className="flex h-full flex-col gap-6 sm:flex-row sm:items-center">
            <div className="relative h-32 w-32 flex-shrink-0 sm:h-40 sm:w-40">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric-blue/20 to-electric-blue/5" />
              <div className="relative flex h-full w-full items-center justify-center rounded-2xl border border-electric-blue/20 bg-background/50">
                <div className="text-6xl">👩🏻‍💻</div>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="bg-gradient-to-r from-electric-blue via-white to-electric-blue bg-clip-text text-2xl font-bold text-transparent sm:text-3xl tracking-tight">
                Building Robust iOS Architectures
              </h3>
              <p className="text-lg text-gray-300">
                안녕하세요, 5년 차 iOS 개발자 박현선입니다.
              </p>
              <p className="text-sm leading-relaxed text-gray-400">
                단순한 기능 구현을 넘어, 유지보수 가능한 아키텍처와 0.1초의
                UX 디테일을 고민합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Card - Small */}
        <div
          ref={(el) => {
            cardRefs.current[1] = el;
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/8 p-6 backdrop-blur-xl transition-all duration-500 hover:border-electric-blue/30 hover:bg-white/12 sm:col-span-1 lg:col-span-1 lg:row-span-1"
          style={{ animationDelay: "100ms" }}
        >
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="text-3xl font-bold text-electric-blue">5+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent" />
            <div className="space-y-1">
              <div className="text-3xl font-bold text-electric-blue">10+</div>
              <div className="text-sm text-gray-300">Apps Launched</div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent" />
            <div className="space-y-1">
              <div className="text-3xl font-bold text-electric-blue">100%</div>
              <div className="text-sm text-gray-300">Legacy Migration</div>
            </div>
          </div>
        </div>

        {/* Tech Focus Card - Medium */}
        <div
          ref={(el) => {
            cardRefs.current[2] = el;
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/8 p-6 backdrop-blur-xl transition-all duration-500 hover:border-electric-blue/30 hover:bg-white/12 sm:col-span-2 lg:col-span-2 lg:row-span-1"
          style={{ animationDelay: "200ms" }}
        >
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-electric-blue">
            Tech Focus
          </h4>
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Highlight Skills - Large with gradient */}
            {["SwiftUI", "Swift Concurrency", "TCA / ReactorKit", "Tuist"].map(
              (tech, idx) => (
                <span
                  key={tech}
                  className="rounded-xl border border-electric-blue/30 bg-gradient-to-r from-electric-blue/20 via-electric-blue/15 to-electric-blue/10 px-4 py-2 text-sm font-semibold text-electric-blue shadow-[0_4px_12px_-4px_rgba(125,249,255,0.3)] transition hover:scale-105 hover:border-electric-blue/50 hover:shadow-[0_6px_16px_-4px_rgba(125,249,255,0.4)]"
                  style={{ animationDelay: `${300 + idx * 50}ms` }}
                >
                  {tech}
                </span>
              )
            )}
            {/* Core Skills - Medium solid */}
            {["RxSwift", "CI/CD (Fastlane)", "UIKit", "Modularization"].map(
              (tech, idx) => (
                <span
                  key={tech}
                  className="rounded-lg border border-electric-blue/20 bg-electric-blue/10 px-3 py-1.5 text-xs font-medium text-electric-blue transition hover:border-electric-blue/40 hover:bg-electric-blue/20"
                  style={{ animationDelay: `${500 + idx * 50}ms` }}
                >
                  {tech}
                </span>
              )
            )}
            {/* Specialty - Small with border */}
            {["Unity Bridge", "Obj-C Migration", "Hybrid Web Interface"].map(
              (tech, idx) => (
                <span
                  key={tech}
                  className="rounded-md border border-electric-blue/15 bg-transparent px-2.5 py-1 text-xs font-medium text-electric-blue/80 transition hover:border-electric-blue/30 hover:text-electric-blue"
                  style={{ animationDelay: `${700 + idx * 50}ms` }}
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        {/* Story Card - Long */}
        <div
          ref={(el) => {
            cardRefs.current[3] = el;
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/8 p-8 backdrop-blur-xl transition-all duration-500 hover:border-electric-blue/30 hover:bg-white/12 sm:col-span-2 lg:col-span-3 lg:row-span-1"
          style={{ animationDelay: "300ms" }}
        >
          <h4 className="mb-3 text-lg font-semibold text-white">From Agency to Lead</h4>
          <p className="leading-relaxed text-gray-300">
            에이전시에서의 빠른 실행력부터 대기업/스타트업에서의 깊이 있는
            설계 경험까지, 다양한 환경에서 문제를 해결해온 올라운더입니다.
            사용자 경험과 코드 품질 사이의 균형을 찾아내는 것이 저의 강점입니다.
          </p>
        </div>

        {/* Soft Skill Card */}
        <div
          ref={(el) => {
            cardRefs.current[4] = el;
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/8 p-6 backdrop-blur-xl transition-all duration-500 hover:border-electric-blue/30 hover:bg-white/12 sm:col-span-1 lg:col-span-1 lg:row-span-1"
          style={{ animationDelay: "400ms" }}
        >
          <h4 className="mb-4 text-lg font-semibold text-white">Collaborator</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-blue/10 text-xl">
                🎮
              </div>
              <div>
                <div className="text-sm font-medium text-white">Unity Team</div>
                <div className="text-xs text-gray-400">Cross-platform</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-blue/10 text-xl">
                ⚙️
              </div>
              <div>
                <div className="text-sm font-medium text-white">Backend Team</div>
                <div className="text-xs text-gray-400">API Integration</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-blue/10 text-xl">
                🤖
              </div>
              <div>
                <div className="text-sm font-medium text-white">Android Team</div>
                <div className="text-xs text-gray-400">Feature Sync</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

