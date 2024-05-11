import React, { useEffect, useState } from "react";
import { items } from "../data/data";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/store";
import { RotatingLines } from "react-loader-spinner";
import { dateFormatter } from "../lib/dateFormatter";
import axios from "axios";

export default function CompanyDocs() {
  const { t, i18n } = useTranslation();
  const [datas, setDatas] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    // dispatch(fetchData(`company/${id}/contracts/`));
    axios
      .get(
        `https://admin.hightargetgroup.uz/${i18n.language}/api/v1/logistics/company/${id}/contracts/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setDatas(res.data?.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pathname, id, i18n.language]);

  return (
    <div className="p-[24px]">
      <ArrowLeftOutlined
        onClick={() => navigate(-1)}
        className="cursor-pointer text-[25px]"
      />
      {loading ? (
        <RotatingLines
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
        />
      ) : (
        <table className="w-[100%] mt-10 border-collapse table-auto ">
          <thead>
            <tr className="border-b-[1px] border-b-[grey] py-5">
              <th className="desktop:text-[16px] text-center py-5 mobile:text-[12px] font-bold">
                {t("documentNumber")}
              </th>
              <th className="desktop:text-[16px] text-center py-5 mobile:text-[12px] font-bold">
                {t("sum")}
              </th>
              <th className="desktop:text-[16px] text-center py-5 mobile:text-[12px] font-bold">
                {t("companyName")}
              </th>
              <th className="desktop:text-[16px] text-center py-5 mobile:text-[12px] font-bold">
                {t("autoNumber")}
              </th>
              <th className="desktop:text-[16px] text-center py-5 mobile:text-[12px] font-bold">
                {t("date")}
              </th>
            </tr>
          </thead>
          <tbody>
            {!data ? (
              <tr>
                <td>No data available</td>
              </tr>
            ) : (
              datas?.map((company, index) => {
                return (
                  <tr
                    onClick={() => navigate(`${company?.id}/`)}
                    className="border-b-[1px] border-b-[grey] py-5   "
                    key={index}
                  >
                    <td className="desktop:text-[16px] text-center py-5 mobile:text-[12px]">
                      {company.contract_number}
                    </td>
                    <td className="desktop:text-[16px] text-center py-5 mobile:text-[12px]">
                      {company.cost}
                    </td>
                    <td className="desktop:text-[16px] text-center py-5 mobile:text-[12px]">
                      {company.title}
                    </td>
                    <td className="desktop:text-[16px] text-center py-5 mobile:text-[12px]">
                      {company.auto_number}
                    </td>
                    <td className="desktop:text-[16px] text-center py-5 mobile:text-[12px]">
                      {dateFormatter(company.created_at)}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      )}
      {error && <div>Error</div>}
    </div>
  );
}
