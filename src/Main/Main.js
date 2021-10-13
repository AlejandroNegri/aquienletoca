import React, { useState } from "react";
import { Table, Modal } from "antd";

function Main() {
  const [modalVisible, setModalVisible] = useState(false);
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState({});
  const [listaJugadoresMain, setListaJugadoresMain] = useState([
    {
      key: "1",
      nombre: "Ale Negri",
      pjsl: 7,
    },
    {
      key: "2",
      nombre: "Maxi Ceballos",
      pjsl: 12,
    },
    {
      key: "3",
      nombre: "Ramiro Cámara",
      pjsl: 4,
    },
    {
      key: "4",
      nombre: "Nico Chervo",
      pjsl: 10,
    },
  ]);

  const columns = [
    {
      title: "Jugador",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Jugados desde última lavada",
      dataIndex: "pjsl",
      key: "pjsl",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.pjsl - b.pjsl,
      sortDirections: ["ascend", "descend", "ascend"],
    },
  ];

  return (
    <div className="App">
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              console.log("record: ", record);
              setModalVisible(true);
              setJugadorSeleccionado(record);
            }, // click row
          };
        }}
        columns={columns}
        dataSource={listaJugadoresMain}
      />
      <Modal
        title="Modal"
        visible={modalVisible}
        onOk={() => setModalVisible(true)}
        onCancel={() => setModalVisible(false)}
        okText="Aceptar"
        cancelText="Cancelar"
      >
        <p>
          ¿Estas seguro de que {jugadorSeleccionado.nombre} se llevará las
          camisetas hoy?
        </p>
      </Modal>
    </div>
  );
}

export default Main;
