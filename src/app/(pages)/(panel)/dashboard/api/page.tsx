import ExampleData from "@/app/components/dashboard/api/ExampleData";
import Snippet from "@/app/components/general/Snippet";

export default function ApiKeys() {
  return (
    <div className="py-5 space-y-5 text-2xl text-dark-green">
      <Snippet>
        <span>KEY</span>
        <span className="font-light overflow-hidden text-ellipsis">
          sdasx584xasxasx_?!9sa64a6cs4c6a5s4c6a84w8c6a46s4a6c8wa486c6a64
        </span>
      </Snippet>

      <Snippet>
        <span>
          https://link.nakres.dev/api/short?link=UZUN_URL_BURAYA&key=API_ANAHTARI_BURAYA
        </span>
      </Snippet>
      <ExampleData />
    </div>
  );
}
