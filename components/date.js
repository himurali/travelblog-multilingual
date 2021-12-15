import { parseISO, format } from "date-fns";
import { useRouter } from "next/router";
const { es, pt, it } = require("date-fns/locale");

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  let { locale } = useRouter();

  let dateStr = () => {
    switch (locale) {
      case "pt":
        return format(date, "d 'de' LLLL, yyyy", { locale: pt });
        break;
      case "es":
        return format(date, "d 'de' LLLL 'de' yyyy", { locale: es });
        break;
      case "it":
        return format(date, "d LLLL yyyy", { locale: it });
        break;
      default:
        return format(date, "LLLL	d, yyyy");
        break;
    }
  };
  return (
    <time dateTime={dateString} className="text-stone-600 text-sm">
      {dateStr()}
    </time>
  );
}
