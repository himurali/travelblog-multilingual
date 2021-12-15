import { parseISO, format } from "date-fns";
import { useRouter } from "next/router";
const { es, pt, it } = require("date-fns/locale");

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  let { locale } = userRouter();
  return (
    <time dateTime={dateString}>
      {format(date, "LLLL	d, yyyy")}

      {format(date, "d 'de' LLLL 'de' yyyy", { locale: es })}

      {format(date, "d 'de' LLLL, yyyy", { locale: pt })}

      {format(date, "d LLLL yyyy", { locale: it })}
    </time>
  );
}
