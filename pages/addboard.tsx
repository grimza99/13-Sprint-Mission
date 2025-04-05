import Button from "@/components/Button";
import { ImgInput, Input } from "@/components/Input";
import { createArticle } from "@/lib/Articles";
import { cookies } from "next/headers";
import { useState } from "react";

// export function getServerSideProps() {}

const InputAttributes = [
  {
    name: "title",
    value: "",
    placeholder: "제목을 입력해주세요",
    label: "제목",
    validation: "",
  },
  {
    name: "content",
    value: "",
    placeholder: "내용을 입력해주세요",
    label: "내용",
    validation: "",
  },
];
export default function AddBoard() {
  const [currentValue, setCurrentValue] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
  });

  const handleChange = (key: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    await createArticle(formData);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="w-full flex h-[42px] items-center justify-between">
        <p className="font-bold text-[20px]">게시글 쓰기 </p>
        <div className="w-[74px] h-[42px]">
          <Button
            onClick={() => {
              handleSubmit();
            }}
          >
            등록
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {InputAttributes.map((input) => {
          return (
            <Input
              onChange={(value: string) => handleChange(input.name, value)}
              name={input.name}
              value={input.value}
              label={input.label}
              placeholder={input.placeholder}
            />
          );
        })}

        <ImgInput
          onChange={(value) => handleChange("image", value)}
          name="image"
          label="이미지"
          placeholder="이미지 등록"
        />
      </div>
    </div>
  );
}
