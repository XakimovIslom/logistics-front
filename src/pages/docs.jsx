import { ArrowLeftOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchData } from "../store/store";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useTranslation } from "react-i18next";
const BaseUrl = "https://hightargetgroup.uz";
export default function Docs2() {
  const { i18n } = useTranslation();
  const { id, idnew } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(
      fetchData(
        `${i18n.language}/api/v1/logistics/company/${id}/contracts/${idnew}/`
      )
    );
  }, [dispatch, i18n.language]);

  return (
    <div className="p-[24px]">
      <ArrowLeftOutlined
        onClick={() => navigate(-1)}
        size={45}
        className="cursor-pointer text-[25px]"
      />
      {!data ? (
        <p>No available data</p>
      ) : (
        <div className="mt-10 flex items-center justify-between flex-wrap gap-[20px] h-screen">
          <DocViewer
            documents={[
              { uri: data?.akt, fileName: "Akt" },
              { uri: data?.invoice, fileName: "Invoice" },
              { uri: data?.zayavka, fileName: "Zayavka" },
              { uri: data?.cmr, fileName: "Cmr" },
            ]}
            pluginRenderers={DocViewerRenderers}
          />
        </div>
      )}

      {error && <div>Error while fetching data</div>}
    </div>
  );
}
