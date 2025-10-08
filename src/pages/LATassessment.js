import React, { useState } from "react";

const latData = [
  {
    key: "ke1",
    title: "Key element 1: Ratification of human rights instruments",
    items: [
      { id: 1, description: "CEDAW is ratified.", status: "Yes", basis: "N/A" },
      { id: 2, description: "ACHPR is ratified.", status: "Yes", basis: "N/A" },
      { id: 3, description: "Maputo Protocol is ratified.", status: "No", basis: "N/A" },
    ],
  },
  {
    key: "ke2",
    title: "Key element 2: Elimination of gender-based discrimination in the Constitution",
    items: [
      { id: 4, description: "The Constitution prohibits gender-based discrimination.", status: 3, basis: "The Constitution of Sierra Leone, 1991, Section 27" },
      { id: 5, description: "The Constitution recognises customary law but states that gender-based discrimination in customary law is superseded by the principle of non-discrimination in the Constitution.", status: 0, basis: "The Constitution of Sierra Leone, 1991, Section 27" },
      { id: 6, description: "The Constitution recognises religious law but states that gender-based discrimination in religious law is superseded by the principle of non-discrimination in the Constitution.", status: 0, basis: "No provision could be located" },
      { id: 7, description: "The Constitution promotes the adoption of special measures for the advancement of women.", status: 0, basis: "No provision could be located" },
    ],
  },
  {
    key: "ke3",
    title: "Key element 3: Recognition of women’s legal capacity",
    items: [
      { id: 8, description: "Men and women, including married women, have the ability to conclude contracts under the same basic conditions, rights and obligations.", status: 4, basis: "The Constitution of Sierra Leone, 1991, Section 8; The Registration of Customary Marriage and Divorce Act, 2009, Section 18" },
    ],
  },
  {
    key: "ke4",
    title: "Key element 4: Gender-equality of rights with respect to nationality",
    items: [
      { id: 9, description: "Men and women are able to apply for identity documents under the same conditions.", status: 3, basis: "The National Registration Act, 2008, Sections 6 & 7" },
      { id: 10, description: "A female national can confer citizenship to her non-national spouse under the same conditions as a male national.", status: 0, basis: "The Sierra Leone Citizenship Act, 1973, Section 7" },
      { id: 11, description: "Men and women can confer citizenship to their children under the same conditions.", status: 3, basis: "The Sierra Leone Citizenship (Amendment) Act, 2006, Section 3" },
    ],
  },
  {
    key: "ke5",
    title: "Key element 5: Gender equality in property rights",
    items: [
      { id: 12, description: "The law recognises gender-equality in the right to own or control property regardless of the type of marriage.", status: 0, basis: "The Constitution of Sierra Leone, 1991, Section 27; The Matrimonial Causes Act, 1960" },
      { id: 13, description: "The law recognises full or partial community of property as the default marital property regime.", status: 0, basis: "The Married Women’s Property Act, 1882, Section 2" },
      { id: 14, description: "Spousal consent is mandatory for any transaction involving matrimonial property.", status: 0, basis: "No provision could be located" },
      { id: 15, description: "The law establishes a presumption of joint ownership of property in consensual unions.", status: 0, basis: "No provision could be located" },
      { id: 16, description: "The legal framework includes provisions for the promotion of women’s rights to land, property, and/or productive resources.", status: 1, basis: "The Draft National Land Policy" },
    ],
  },
  {
    key: "ke6",
    title: "Key element 6: Gender equality in inheritance",
    items: [
      { id: 17, description: "The surviving spouse is granted user rights to the matrimonial house for life.", status: 3, basis: "The Devolution of Estates Act, 2007, Section 15" },
      { id: 18, description: "Under the law of succession, the surviving spouse is entitled to a minimum share of matrimonial property.", status: 3, basis: "The Devolution of Estates Act, 2007, Section 8" },
      { id: 19, description: "The law allows partners living in consensual union to inherit from each other.", status: 3, basis: "The Devolution of Estates Act, 2007, Section 2" },
      { id: 20, description: "Brothers and sisters have an equal right to inherit.", status: 3, basis: "The Devolution of Estates Act, 2007, Section 13" },
      { id: 21, description: "Brothers and sisters receive an equal share of inheritance.", status: 0, basis: "The Devolution of Estates Act, 2007 Sections 8(d), 10, 13, 14, 28 allow devolution according to Muslim law" },
      { id: 22, description: "A right to compensation of other siblings giving up their claims on the family property exists.", status: 0, basis: "No provision could be located" },
    ],
  },
  {
    key: "ke7",
    title: "Key element 7: Gender-equitable implementation, dispute mechanisms and access to justice",
    items: [
      { id: 23, description: "Decentralisation of land administration services is effected through customary land institutions.", status: 4, basis: "The Chieftaincy Act, 2009; The Local Courts Act, 2011, Sections 2, 7 & 15" },
      { id: 24, description: "Decentralisation of land administration services is effected through formal land institutions.", status: "N/A", basis: "The General Registration Act, Cap 255 (applies only to Freetown area)" },
      { id: 25, description: "The law guarantees equality before the law.", status: 3, basis: "The Constitution of Sierra Leone, 1991, Section 8" },
      { id: 26, description: "The law guarantees equal access to judicial systems and statutory or customary dispute resolution mechanisms to resolve disputes over tenure rights.", status: 0, basis: "N/A" },
      { id: 27, description: "The law makes provision for legal support in civil procedures.", status: 3, basis: "The Legal Aid Act, 2012, Section 1" },
      { id: 28, description: "A human rights commission or gender-specific institution is in place.", status: 3, basis: "The Human Rights Commission of Sierra Leone Act, 2004" },
    ],
  },
  {
    key: "ke8",
    title: "Key element 8: Women’s participation in national and local institutions enforcing land legislation",
    items: [
      { id: 29, description: "The law sets quotas for the appointment of women in land management and administration committees.", status: 2, basis: "The Gender Equality Bill, 2011" },
      { id: 30, description: "The law sets quotas for the appointment of women in land dispute resolution committees.", status: 0, basis: "No provision could be located" },
    ],
  },
];

export default function LATAssessment() {
  const [openKeys, setOpenKeys] = useState({});

  const toggleKey = (key) => {
    setOpenKeys((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 space-y-8">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
        LAT Assessment – Sierra Leone
      </h1>

      {latData.map((element) => (
        <div key={element.key}>
          <button
            onClick={() => toggleKey(element.key)}
            className="w-full text-left bg-green-100 text-green-800 font-semibold px-4 py-3 rounded shadow hover:bg-green-200 transition"
          >
            {element.title}
          </button>

          {openKeys[element.key] && (
            <div className="mt-2 p-4 bg-white rounded shadow space-y-2">
              {element.items.map((item) => (
                <div key={item.id} className="border-b border-gray-200 py-2">
                  <p className="font-medium">{item.id}. {item.description}</p>
                  <p><span className="font-semibold">Status:</span> {item.status}</p>
                  <p><span className="font-semibold">Basis:</span> {item.basis}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

