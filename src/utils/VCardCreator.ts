import VCard from "vcard-creator";

export const createVCard = async () => {
  const vCard = new VCard();

  const firstName = "Victor";
  const lastName = "Nunes";
  const company = "VOTTH Digital";
  const jobTitle = "CEO";
  const role = "Software Engineer";
  const email = "contato@votth.com";
  const phone = "+55 31 997204079";
  const personalUrl = "https://votth-victor.github.io/personal-page";
  const url = "https://votth.com";

  vCard
    .addName(lastName, firstName)
    .addCompany(company)
    .addJobtitle(jobTitle)
    .addRole(role)
    .addEmail(email)
    .addPhoneNumber(phone)
    .addSocial(
      "https://www.linkedin.com/in/victornnunees/",
      "linkedin",
      "victornnunees"
    )
    .addURL(personalUrl)
    .addURL(url);

  const file = new Blob([vCard.toString()], {
    type: "text/vcard;charset=utf-8",
  });

  const csvURL = window.URL.createObjectURL(file);
  let tempLink = document.createElement("a");
  tempLink.href = csvURL;
  tempLink.setAttribute("download", "VictorNunesVotthDigital.vcf");
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
};
