"use client";

// icons
import { GrDocumentUser } from "react-icons/gr";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { IoTimeOutline } from "react-icons/io5";
// components
import LastViewCard from "@/app/components/general/LastViewCard";
import Table from "@/app/components/general/LastViewTable";

const lastClicks = [
  { tag: "discord", date: "14:58:13" },
  { tag: "discord", date: "14:58:13" },
  { tag: "discord", date: "14:58:13" },
  { tag: "discord", date: "14:58:13" },
  { tag: "discord", date: "14:58:13" },
];

const labels = ["Link", "Zaman"];

function LastLinksCard() {
  return (
    <LastViewCard Icon={GrDocumentUser} label="Son Linkler">
      {lastClicks?.length < 0 ? (
        <div className="flex items-center justify-center py-10">
          <span>Bugünlük Tıklanma Yok</span>
        </div>
      ) : (
        <Table>
          <Table.Head>
            <Table.Row>
              {labels.map((key, i) => (
                <Table.Column key={i}>{key}</Table.Column>
              ))}
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {lastClicks.map((click, i) => (
              <Table.Row key={i}>
                <Table.Cell>
                  <span className="flex items-center justify-center gap-1 cursor-pointer group">
                    {click.tag}{" "}
                    <LiaExternalLinkAltSolid
                      size={20}
                      className="group-hover:text-black"
                    />
                  </span>
                </Table.Cell>
                {/* <Table.Cell>{click.device}</Table.Cell> */}
                <Table.Cell>
                  <span className="flex items-center justify-center gap-1 cursor-pointer">
                    <IoTimeOutline size={20} />
                    {click.date}
                  </span>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </LastViewCard>
  );
}

export default LastLinksCard;
