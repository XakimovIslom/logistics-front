import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Tables({ data }) {
  const { results } = data;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <table className="w-full mt-[50px]">
      <thead>
        <tr>
          <th className="text-left">
            <p className="mb-5">{t("company")}</p>
          </th>
        </tr>
      </thead>
      <tbody>
        {!results ? (
          <tr>
            <td>No data available</td>
          </tr>
        ) : (
          results?.map((item, index) => {
            return (
              <tr key={index}>
                <td
                  className="py-5 cursor-pointer hover:bg-blue-600 hover:text-white px-2"
                  onClick={() => navigate(`${pathname}/${item?.id}`)}
                >
                  {item.title}
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
}
