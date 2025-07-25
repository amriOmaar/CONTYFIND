import Calendar from "@/components/calendar/Calendar";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CONTYFIND",
  description:
    "CONTYFIND",
};

export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Calendar" />
      <Calendar />
    </div>
  );
}
