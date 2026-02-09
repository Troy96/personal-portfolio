"use client";

export function GradientMesh() {
  return (
    <div
      className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-screen z-[-1] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute -top-1/4 -left-1/4 h-[60%] w-[60%] rounded-full opacity-10 blur-[100px] dark:opacity-[0.07]"
        style={{
          background: "var(--accent-gradient-from)",
          animation: "mesh-float-1 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -top-1/4 -right-1/4 h-[50%] w-[50%] rounded-full opacity-[0.07] blur-[100px] dark:opacity-[0.05]"
        style={{
          background: "var(--accent-gradient-to)",
          animation: "mesh-float-2 15s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-1/4 left-1/3 h-[45%] w-[45%] rounded-full opacity-[0.07] blur-[100px] dark:opacity-[0.04]"
        style={{
          background: "var(--accent-gradient-from)",
          animation: "mesh-float-3 20s ease-in-out infinite",
        }}
      />
    </div>
  );
}
