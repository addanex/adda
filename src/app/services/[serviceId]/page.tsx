export default async function ServicePage({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}) {
  const { serviceId } = await params;

  return (
    <div className="w-400 mx-auto">
      <h1 className="text-2xl font-bold mb-4">{serviceId}</h1>
      <p>This is the page for the service: {serviceId}</p>
    </div>
  );
}
