import Image from "./Image";
interface Content {
  id: string;
  headline: string;
  content: string;
  class: string;
  images: Array<Image>;
}

export default Content;
