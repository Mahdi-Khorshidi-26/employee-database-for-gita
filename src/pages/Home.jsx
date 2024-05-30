/* eslint-disable react/prop-types */
import Styles from "./home.module.css";
import { BiShow } from "react-icons/bi";
import { LiaEditSolid } from "react-icons/lia";
import { GrMap } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineBarChart } from "react-icons/ai";
import Modal from "../components/Modal/Modal";
import { useState } from "react";
import { idNumber, users } from "../components/UserData/Users";
import { IoArrowBack } from "react-icons/io5";
import Button from "../components/Button/Button";
import { ImExit } from "react-icons/im";

export default function Home() {
  const [foundUser, setFoundUser] = useState(null);
  const [usersState, setUsersState] = useState(users);
  const [closeModal, setCloseModal] = useState(true);
  const [userId, setUserId] = useState(0);
  const [modalType, setModalType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [id, setId] = useState(idNumber + 1);
  const [longitude, setLongitude] = useState(51.4749824);
  const [latitude, setLatitude] = useState(35.3645394);
  const [data, setData] = useState([
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ]);

  function handleUserSearch(e) {
    e.preventDefault();
    if (!nationalId.trim() || !firstName.trim() || !lastName.trim()) return;
    let foundUser = usersState.filter((user) => {
      if (
        user.firstName === firstName.trim() &&
        user.lastName === lastName.trim() &&
        !isNaN(user.nationalId) === !isNaN(nationalId.trim()) &&
        nationalId.trim().length === 10 &&
        user.nationalId === nationalId.trim()
      ) {
        return user;
      }
    });
    setFoundUser(foundUser);
    if (foundUser.length) {
      openModal();
    } else {
      alert("کد ملی وارد شده صحیح نمی باشد 😕☹");
    }
    setNationalId("");
  }

  function handleBackButton() {
    setFoundUser(null);
  }

  function openModal() {
    setCloseModal((prevClose) => !prevClose);
    setFirstName("");
    setLastName("");
    setNationalId("");
  }
  function handleDeletingUser() {
    const remainedUsers = usersState.filter((user) => user.id !== userId);
    setUsersState(remainedUsers);
    setCloseModal((prevClose) => !prevClose);
  }

  function handleAddUser() {
    const newUser = {
      id,
      firstName,
      lastName,
      nationalId,
      data,
      latitude,
      longitude,
    };
    if (nationalId.trim() && firstName.trim() && lastName.trim()) {
      let checkedUser = usersState.some(
        (user) => user.nationalId === newUser.nationalId
      );
      if (checkedUser) {
        alert("کد ملی وارد شده تکراری است دوباره تلاش کنید 🙃");
      } else {
        if (newUser.nationalId.length == 10 && !isNaN(newUser.nationalId)) {
          setId((id) => id + 1);
          setUsersState((usersState) => [...usersState, newUser]);
          openModal();
        } else {
          alert("کد ملی وارد شده صحیح نمی باشد 😕☹");
        }
      }
    } else {
      return;
    }
    setNationalId("");
  }

  function handleShowUser(id) {
    openModal();
    let selectedUser = usersState.find((user) => {
      return user.id === id;
    });
    if (selectedUser) {
      setFirstName(selectedUser.firstName);
      setLastName(selectedUser.lastName);
      setNationalId(selectedUser.nationalId);
    }
  }
  function handleEditUser(id) {
    openModal();
    handleShowUser(id);
    handleAddUser();
  }
  function handleMap(id) {
    openModal();
    let selectedUser = usersState.find((user) => {
      return user.id === id;
    });
    setLatitude(selectedUser.latitude);
    setLongitude(selectedUser.longitude);
  }
  function handleChart(id) {
    openModal();
    let selectedUser = usersState.find((user) => {
      return user.id === id;
    });
    setData(selectedUser.data);
  }
  return (
    <>
      {!closeModal && (
        <Modal
          isModal={modalType === "search" ? false : true}
          isClosed={closeModal}
          closeModal={openModal}
          name={
            modalType === "delete"
              ? "حذف"
              : modalType === "add"
              ? "افزودن"
              : modalType === "show"
              ? "مشاهده"
              : modalType === "edit"
              ? "ویرایش"
              : modalType === "search"
              ? "جستجو"
              : modalType === "map"
              ? "نقشه"
              : modalType === "chart"
              ? "نمودار"
              : ""
          }
          defaultButtonText={
            modalType === "add"
              ? "افزودن"
              : modalType === "show"
              ? "بستن"
              : modalType === "edit"
              ? "تایید"
              : modalType === "search"
              ? "جستجو"
              : ""
          }
          isDoubled={modalType !== "show" && modalType !== "search"}
          modalType={modalType}
          onClick={
            modalType === "delete"
              ? handleDeletingUser
              : modalType === "edit"
              ? handleEditUser
              : modalType === "add"
              ? handleAddUser
              : modalType === "search"
              ? handleUserSearch
              : () => {}
          }
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          nationalId={nationalId}
          setNationalId={setNationalId}
          longitude={longitude}
          latitude={latitude}
          data={data}
        />
      )}
      <div className={Styles.table_wrapper}>
        <div className={Styles.btnContainer}>
          <Button
            type="link"
            text="افزودن"
            onClick={() => {
              openModal();
              setModalType("add");
            }}
          />
          <Button
            type="link"
            text="جستجو"
            onClick={() => {
              openModal();
              setModalType("search");
            }}
          />
        </div>
        <table className={Styles.fl_table}>
          <thead>
            <tr>
              <th>ردیف</th>
              <th>نام</th>
              <th>نام خانوادگی</th>
              <th>کد ملی</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {foundUser
              ? foundUser.map((foundUser) => {
                  return (
                    <User
                      user={foundUser}
                      key={foundUser.id}
                      foundUser={foundUser}
                      onClick={openModal}
                      handleBackButton={handleBackButton}
                      setUserId={setUserId}
                      setModalType={setModalType}
                      handleShowUser={handleShowUser}
                      handleEditUser={handleEditUser}
                      handleMap={handleMap}
                      handleChart={handleChart}
                    />
                  );
                })
              : usersState.map((user) => {
                  return (
                    <User
                      user={user}
                      key={user.id}
                      foundUser={foundUser}
                      onClick={openModal}
                      handleBackButton={handleBackButton}
                      setUserId={setUserId}
                      setModalType={setModalType}
                      handleShowUser={handleShowUser}
                      handleEditUser={handleEditUser}
                      handleMap={handleMap}
                      handleChart={handleChart}
                    />
                  );
                })}
          </tbody>
        </table>
        {foundUser?.length === 0 && (
          <p className={Styles.notFound}>
            موردی پیدا نشد 😓
            <ImExit onClick={handleBackButton} />
          </p>
        )}
      </div>
    </>
  );
}

function User({
  user,
  foundUser,
  onClick,
  handleBackButton,
  setUserId,
  setModalType,
  handleShowUser,
  handleEditUser,
  handleMap,
  handleChart,
}) {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.nationalId}</td>
      <td className={Styles.actions}>
        <Actions
          foundUser={foundUser}
          onClick={onClick}
          handleBackButton={handleBackButton}
          userId={user.id}
          setUserId={setUserId}
          setModalType={setModalType}
          handleShowUser={handleShowUser}
          handleEditUser={handleEditUser}
          handleMap={handleMap}
          handleChart={handleChart}
        />
      </td>
    </tr>
  );
}

function Actions({
  foundUser,
  onClick,
  handleBackButton,
  userId,
  setUserId,
  setModalType,
  handleShowUser,
  handleEditUser,
  handleMap,
  handleChart,
}) {
  return (
    <>
      <BiShow
        style={{ color: "#119cb6" }}
        onClick={() => {
          setUserId(userId);
          handleShowUser(userId);
          setModalType("show");
        }}
      />
      <LiaEditSolid
        style={{ color: "#e4aa49" }}
        onClick={() => {
          onClick();
          setUserId(userId);
          handleEditUser(userId);
          setModalType("edit");
        }}
      />
      <GrMap
        style={{ color: "#b22e3a" }}
        onClick={() => {
          setUserId(userId);
          handleMap(userId);
          setModalType("map");
        }}
      />
      <RiDeleteBin6Line
        style={{ color: "#ee9a93" }}
        onClick={() => {
          onClick();
          setUserId(userId);
          setModalType("delete");
        }}
      />
      <AiOutlineBarChart
        style={{ color: "orange" }}
        onClick={() => {
          setUserId(userId);
          handleChart(userId);
          setModalType("chart");
        }}
      />
      {foundUser && <IoArrowBack onClick={handleBackButton} />}
    </>
  );
}
