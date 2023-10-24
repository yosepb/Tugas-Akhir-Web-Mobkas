const WidgetCommonHumanDate = ({ date }) => {
  const options = {
    year: "numeric",
    month: "long",
  };

  if (typeof date === "string") {
    return <>{new Date(Date.parse(date)).toLocaleString("id-ID", options)}</>;
  }
  if (date) {
    return <>{date.toLocaleString("id-ID", options)}</>;
  }

  return "";
};

export default WidgetCommonHumanDate;
