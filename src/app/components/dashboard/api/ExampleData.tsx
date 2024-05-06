"use client";

const codePrev = {
  success: true,
  message: "Başarıyla kısaltıldı.",
  data: {
    long_url: "UZUN_URL_BURAYA",
    short_url: "KISA_URL_BURAYA",
    tag: "ETİKET_BURAYA",
  },
};

function ExampleData() {
  return (
    <article className="bg-Blue text-white font-light p-5 rounded-lg">
      <h2 className="mb-5 text-off-wite/50">// Example Response</h2>
      <pre>
        <code>{JSON.stringify(codePrev, null, 2)}</code>
      </pre>
    </article>
  );
}

export default ExampleData;
