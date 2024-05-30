import Styles from "./modal.module.css";
import { IoMdClose } from "react-icons/io";
import Input from "../Input/Input";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import Map from "../Map/Map";
import Chart from "../Chart/Chart";
Modal.propTypes = {
  isModal: PropTypes.bool,
  isDoubled: PropTypes.bool,
  name: PropTypes.string,
  defaultButtonText: PropTypes.string,
  buttonText2: PropTypes.string,
  setFoundUser: PropTypes.func,
  closeModal: PropTypes.func,
  isClosed: PropTypes.bool,
  modalType: PropTypes.string,
  onClick: PropTypes.func,
  firstName: PropTypes.string.isRequired,
  setFirstName: PropTypes.func,
  lastName: PropTypes.string.isRequired,
  setLastName: PropTypes.func,
  nationalId: PropTypes.string.isRequired,
  setNationalId: PropTypes.func,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  data: PropTypes.array,
};

export default function Modal({
  isModal,
  isDoubled = true,
  name = "افزودن",
  defaultButtonText = "افزودن",
  buttonText2 = "بستن",
  closeModal = () => {},
  isClosed = true,
  modalType = "add",
  onClick = () => {},
  firstName,
  setFirstName,
  lastName,
  setLastName,
  nationalId,
  setNationalId,
  latitude,
  longitude,
  data,
}) {
  return (
    <>
      {!isClosed && (
        <div
          className={
            isModal ? `${Styles.boxContainerModal}` : `${Styles.boxContainer}`
          }
        >
          <div className={Styles.formHeader}>
            <h3 className={Styles.formTitle}>{name}</h3>
            <span className={Styles.close} onClick={closeModal}>
              <IoMdClose className={Styles.closeIcon} />
            </span>
          </div>
          {modalType === "add" ||
          modalType === "edit" ||
          modalType === "show" ||
          modalType === "search" ? (
            <form
              onSubmit={(e) => onClick(e)}
              className={
                isModal ? `${Styles.formModal}` : `${Styles.formAccordion}`
              }
            >
              <Input
                id="firstName"
                label="نام"
                setValue={setFirstName}
                type="text"
                value={firstName}
                disable={modalType === "show"}
              />
              <Input
                id="lastName"
                label="نام خانوادگی"
                setValue={setLastName}
                type="text"
                value={lastName}
                disable={modalType === "show"}
              />
              <Input
                id="nationalId"
                label="کد ملی"
                setValue={setNationalId}
                type="text"
                value={nationalId}
                disable={modalType === "show"}
              />
              {isDoubled ? (
                <div className={Styles.doubleBtn}>
                  <Button
                    type="submit"
                    text={defaultButtonText}
                    onClick={onClick}
                  />
                  <Button text={buttonText2} onClick={closeModal} type="link" />
                </div>
              ) : (
                <Button
                  text={defaultButtonText}
                  onClick={
                    modalType === "search"
                      ? onClick
                      : modalType === "show"
                      ? closeModal
                      : () => {}
                  }
                  type={modalType === "search" ? "submit" : "link"}
                />
              )}
            </form>
          ) : (
            <>
              {modalType === "delete" ? (
                <>
                  <div className={Styles.deleteBox}>
                    <p>آیا رکورد حذف شود ؟</p>
                    <div className={Styles.deleteBoxBtnContainer}>
                      <Button text="بله" onClick={() => onClick()} />
                      <Button text="خیر" onClick={closeModal} />
                    </div>
                  </div>
                </>
              ) : modalType === "map" ? (
                <>
                  <div className={Styles.mapContainer}>
                    <Map latitude={latitude} longitude={longitude} />
                  </div>
                </>
              ) : modalType === "chart" ? (
                <>
                  <div className={Styles.chartContainer}>
                    <Chart data={data} />
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}
