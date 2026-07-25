import { redirect } from "next/navigation";

interface RoomAliasPageProps {
  params: Promise<{ id: string }>;
}

const RoomAliasPage = async ({ params }: RoomAliasPageProps) => {
  const { id } = await params;
  redirect(`/rooms/${id}`);
};

export default RoomAliasPage;
