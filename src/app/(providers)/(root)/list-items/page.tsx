import React from "react";

export async function getServerSideProps() {
  const res = await fetch(
    "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til"
  );
  const data = await res.json();

  return {
    props: { data },
  };
}
function ListItems({ data }) {
  return <div className="flex flex-wrap justify-center"></div>;
}

export default ListItems;
