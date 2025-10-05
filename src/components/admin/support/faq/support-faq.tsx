"use client";

import { Fragment, useState, useMemo } from "react";

import { SupportCard } from "@/components/admin/support";
import { MessageQuestionLineIcon } from "@/assets/icons";
import { AdminCard, Button, Loading } from "@/components/ui";
import { Searchbar } from "@/components/form";
import { useDisclosure } from "@/hooks";
import { CreateEditFaqModal, FaqList } from "@/components/admin/support/faq";
import { useGetFaqList } from "@/queries/faqs";

export const SupportFaq = () => {
  const [search, setSearch] = useState("");
  const [createFaq, { open, close }] = useDisclosure(false);

  const { isLoading, data } = useGetFaqList();

  const faqList = useMemo(() => {
    if (!data?.data) return [];
    if (search === "") return data.data;
    return data.data.filter(
      (faq) =>
        (faq.question.toLowerCase() ?? "").includes(search.toLowerCase()) ||
        (faq.answer.toLowerCase() ?? "").includes(search.toLowerCase()),
    );
  }, [data, search]);

  return (
    <Fragment>
      <CreateEditFaqModal open={createFaq} closeAction={close} />

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
        <SupportCard
          title="Total FAQs"
          value={data?.data.length || 0}
          className="bg-foundation-red-white text-foundation-red-normal"
          Icon={MessageQuestionLineIcon}
        />
      </div>

      <div className="flex w-full flex-col gap-4">
        <p className="text-light-black text-xl font-semibold">
          All Frequently Asked Question (FAQs)
        </p>

        <AdminCard>
          <div className="flex w-full justify-between">
            <Searchbar
              onSendSearchValue={(value) => {
                setSearch(value);
              }}
            />

            <Button width="max" onClick={open}>
              Create New FAQ
            </Button>
          </div>

          {isLoading && <Loading />}
          {data?.data && <FaqList faqs={faqList} />}
        </AdminCard>
      </div>
    </Fragment>
  );
};
