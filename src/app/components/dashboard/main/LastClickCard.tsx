"use client";

// icons
import { GrDocumentUser } from "react-icons/gr";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { IoTimeOutline } from "react-icons/io5";
// components
import Table from "../../general/LastViewTable";
import LastViewCard from "../../general/LastViewCard";
import ClickType from "@/types/ClickType";
import Link from "next/link";

function LastClickCard({ Clicks }: { Clicks: ClickType[] | null }) {
  const labels = ["Link", "Cihaz", "Zaman"];
  const lastClicks = Clicks?.slice(0, 5);

  return (
    <LastViewCard Icon={GrDocumentUser} label="Son Tıklamalar">
      {lastClicks?.length! < 0 ? (
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
            {lastClicks?.map((click, i) => (
              <Table.Row key={i}>
                <Table.Cell>
                  <Link href={click.link.originalUrl} target="_blank">
                    <span className="flex items-center justify-center gap-1 cursor-pointer group">
                      {click.link.shortUrl}
                      <LiaExternalLinkAltSolid
                        size={20}
                        className="group-hover:text-black"
                      />
                    </span>
                  </Link>
                </Table.Cell>
                <Table.Cell>{click.device}</Table.Cell>
                <Table.Cell>
                  <span className="flex items-center justify-center gap-1">
                    <IoTimeOutline size={20} />
                    {click.timestamp.toLocaleString()}
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

export default LastClickCard;
