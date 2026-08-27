import { themeColors } from "~/data";

// Capital S from Fredoka One Regular, scaled to match the existing 512px favicon.
// Source: https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap
const fredokaOneS =
  "M60-92L51-103Q25-135 25-160.5Q25-186 68-228L68-228Q93-252 121-252Q149-252 199-202L199-202Q213-185 239-169.5Q265-154 287-154L287-154Q380-154 380-230L380-230Q380-253 354.5-268.5Q329-284 291-291Q253-298 209-313.5Q165-329 127-350Q89-371 63.5-416.5Q38-462 38-526L38-526Q38-614 103.5-679.5Q169-745 282-745L282-745Q342-745 391.5-729.5Q441-714 460-698L460-698L485-679Q516-650 516-630Q516-610 492-575L492-575Q458-525 422-525L422-525Q401-525 370-545L370-545Q367-547 358.5-555Q350-563 343-568L343-568Q322-581 289.5-581Q257-581 235.5-565.5Q214-550 214-522.5Q214-495 239.5-478Q265-461 303-455Q341-449 386-436.5Q431-424 469-406Q507-388 532.5-343.5Q558-299 558-234Q558-169 532-119.5Q506-70 464-43L464-43Q383 10 291 10L291 10Q244 10 202-1.5Q160-13 134-30L134-30Q81-62 60-92L60-92Z";

export function GET() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="${themeColors.siteName}" transform="translate(68 495) scale(.641)" d="${fredokaOneS}"/></svg>`;

  return new Response(svg, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": "image/svg+xml; charset=utf-8",
    },
  });
}
