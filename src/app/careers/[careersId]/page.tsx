export default async function CareersPage({
  params,
}: {
  params: Promise<{ careersId: string }>;
}) {
  const { careersId } = await params;

  return (
    <div className="w-400 mx-auto flex-1">
      <h1 className="text-2xl font-bold mb-4">{careersId}</h1>
      <p>This is the page for the career: {careersId}</p>
    </div>
  );
}
