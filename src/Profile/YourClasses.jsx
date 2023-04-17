import React, { useContext, useEffect, useState } from "react";
import DescriptionCard from "../components/globalComponents/DescriptonCard";
import CarouselComponent from "../components/globalComponents/CarouselComponent";
import EngArTitle from "../components/globalComponents/EngArTitle";
import { CONSTANTS } from "../global";
import { db } from "../firebase";
import { AuthContext } from "../AuthContext";
import { SwiperSlide } from "swiper/react";

let mappedElements;

function YourClasses() {
  const { userData } = useContext(AuthContext);
  const [classesState, setClassesState] = useState([]);

  console.log(userData?.classes);

  useEffect(() => {
    const classes = userData?.classes;
    if (classes) {
      const classIds = Object.keys(classes);
      console.log(classIds);

      const userClasses = [];

      classIds.forEach((classId) => {
        db.collection("Classes")
          .doc(classId)
          .get()
          .then((classDoc) => {
            if (classDoc.exists) {
              userClasses.push({ id: classId, ...classDoc.data() });
            } else {
              console.log("Class document does not exist");
            }
          })
          .then(() => {
            mappedElements = userClasses?.map((item) => {
              console.log("item", item);
              return (
                <SwiperSlide key={item.id}>
                  <DescriptionCard
                    isInCarousel
                    isGrey
                    classTitle={item.title}
                    imagesrc={item?.image}
                    // imagesrc={item.image}
                    // imagesrc={cake1}
                    // imagesrc={item.imagesrc}
                    number={2}
                    classDur={item.duration}
                    descr={item.description}
                    to={`/singleClass/${item.id}`}
                  />
                </SwiperSlide>
              );
            });

            setClassesState(mappedElements);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
  }, [userData?.classes]);

  const title = (
    <EngArTitle
      english={"Your Classes"}
      arabic={"محضورة هلأ"}
      bottom={"-70%"}
      right={"3%"}
      arColor={CONSTANTS.purpleInactive}
    />
  );

  return (
    <>
      <CarouselComponent
        title={title}
        mappedElements={mappedElements}
        // mappedElements={<SwiperSlide><DescriptionCard /></SwiperSlide>}
      />
      {/* <button onClick={() => console.log(mappedElements)}>log elements</button> */}
    </>
  );
}

export default YourClasses;
