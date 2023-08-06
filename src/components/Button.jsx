import React, { useEffect, useState } from "react";
import IllustrationModal from "./Modals/IllustrationModal";

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      console.log("Install prompt triggered");
      setSupportsPWA(true);
      setPromptInstall(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (supportsPWA && promptInstall) {
      promptInstall.prompt();
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <button
        className="bg-gray-200 font-medium rounded-lg text-md px-10 py-2 text-center md:mr-0 hover:bg-indigo-600 hover:text-white"
        id="setup_button"
        aria-label="Install app"
        title="Install app"
        onClick={handleInstallClick}
      >
        Install
      </button>
      <IllustrationModal show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
};

export default InstallPWA;
