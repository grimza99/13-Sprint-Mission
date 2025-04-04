import Image from "next/image";
import ProfileImg from "@/public/assets/icons/default.profile.icon.svg";
import { useFormatDate } from "@/hooks/useFormatting";
interface Props {
  value: {
    writer: { nickname: string };
    createdAt: string;
  };
}
export default function Profile({ value }: Props) {
  const formattedDate = useFormatDate(value.createdAt);

  return (
    <div className="flex gap-2">
      <Image src={ProfileImg} width={24} height={24} alt="프로필" />

      <div>{value.writer?.nickname}</div>
      {formattedDate}
    </div>
  );
}
