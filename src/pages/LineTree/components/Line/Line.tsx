import React, { FC, useEffect, useState } from "react";
import { BlockWrapper, ChildrenBlock } from "./Line.styles";
import { TLineProps } from "./Line.types";
import LineWIP from "./components/LineWIP/LineWIP";
import LineDone from "./components/LineDone/LineDone";

const Line: FC<TLineProps> = ({ data, depth, highlightWIP }) => {
  const { name, attributes, children } = data;

  const [showChildren, setShowChildren] = useState(depth < 1);
  const [previewImage, setPreviewImage] = useState(attributes?.image);

  useEffect(() => {
    attributes?.product_code &&
      fetch(
        `https://1cmpg.mospromgaz.ru/mpg_unf/hs/production/getphoto?id=${attributes.product_code}`,
        {
          method: "GET",
          headers: {
            Authorization: "Basic RXhjaGFuZ2VfUHJvZDpFeDEzX1ByIWQ=",
          },
        }
      )
        .then((res) => res.text())
        .then((data) => {
          setPreviewImage(`data:image/png;base64,${data}`);
        })
        .catch(() => {
          console.log(`Изображение для ${name} не загружено`);
        });
  }, [attributes?.product_code, name]);

  return (
    <>
      <BlockWrapper>
        {highlightWIP && attributes?.status !== 1 ? (
          <LineDone
            data={data}
            showChildren={showChildren}
            toggleShowChildren={() => setShowChildren((prev) => !prev)}
            previewImage={previewImage}
          />
        ) : (
          <LineWIP
            data={data}
            showChildren={showChildren}
            toggleShowChildren={() => setShowChildren((prev) => !prev)}
            previewImage={previewImage}
          />
        )}

        {!!children?.length && showChildren && (
          <ChildrenBlock>
            {children.map((item, index) => (
              <Line
                data={item}
                depth={depth + 1}
                key={index}
                highlightWIP={highlightWIP}
              />
            ))}
          </ChildrenBlock>
        )}
      </BlockWrapper>
    </>
  );
};

export default Line;
