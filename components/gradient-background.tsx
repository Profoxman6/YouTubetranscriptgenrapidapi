export function GradientBackground() {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-950 dark:to-gray-900" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
    </>
  );
}