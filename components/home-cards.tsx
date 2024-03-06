import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@nextui-org/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faPaperclip } from "@fortawesome/free-solid-svg-icons";

export default function HomeCards() {
  return (
    <Card className="top-20 h-96 -ml-2 w-9/12 shadow-none border">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <h1 className="text-2xl">Ask your Question</h1>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <h1 className="ml-3 mb-4 mt-4 text-2xl text-gray-400">Give a title</h1>
        <Textarea
          placeholder="Place a detailed question here. Include relevant images and use appropriate tags. Additionally, you may select a category that best fits your query. If you're unsure which category your question belongs to, you have the option to create a new one."
          className="resize-none w-full h-40 text-md w-10/12"
        />
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="create new">Create New</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="employment">Employment</SelectItem>
                <SelectItem value="housing">Housing</SelectItem>
                <SelectItem value="legal">Legal Advocacy</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <button className="ml-6 text-gray-700 hover:text-gray-900">
            <FontAwesomeIcon icon={faHashtag} className="h-6 w-6" />
          </button>
          <button className="ml-3 text-gray-700 hover:text-gray-900">
            <FontAwesomeIcon icon={faPaperclip} className="h-6 w-6" />
          </button>
        </div>
        <Button className="rounded-lg bg-primary text-white">Post</Button>
      </CardFooter>
    </Card>
  );
}
