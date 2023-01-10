import Image from "next/image";
import { Button } from "reactstrap";
import { GetImage } from "../../config";

const image = {
  dana: (
    <div>
      <div className="block float-left px-1">
        <Image
          loader={
            GetImage(
              "https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/69653466_549444479178123_4695558371711909888_n.png?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFCLtQkvQFsCJT68rZdS_rKH6hXRMOoPZEfqFdEw6g9kZpVOIbgp-90pqhSOmWcWcj1D8GgccE8ye1gdhxfaW0D&_nc_ohc=Gs1DZKn5It4AX_q4q4r&_nc_ht=scontent-sin6-3.xx&oh=00_AfDaeSCOwJ-ziBO-VbHUCwAfLkd1p2AExaqhiJMXV28OmA&oe=63E06625"
            ).loader
          }
          alt="Dana Image"
          className="rounded-full"
          src={
            GetImage(
              "https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/69653466_549444479178123_4695558371711909888_n.png?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFCLtQkvQFsCJT68rZdS_rKH6hXRMOoPZEfqFdEw6g9kZpVOIbgp-90pqhSOmWcWcj1D8GgccE8ye1gdhxfaW0D&_nc_ohc=Gs1DZKn5It4AX_q4q4r&_nc_ht=scontent-sin6-3.xx&oh=00_AfDaeSCOwJ-ziBO-VbHUCwAfLkd1p2AExaqhiJMXV28OmA&oe=63E06625"
            ).image
          }
          width={30}
          height={20}
        />
      </div>
      Dana
    </div>
  ),
  gopay: (
    <div>
      <div className="block float-left px-1">
        <Image
          loader={
            GetImage(
              "https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/44582957_711921919175870_2005903401161850880_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGh30Y3LHcd3pwbEz6CBuHgyctnM-sgjTDJy2cz6yCNMDVrFBj7eFvjGHGhODxlE8kol9mLikzepF2j1IplhZJQ&_nc_ohc=uiiRMGQlDjUAX-WvLQ1&_nc_ht=scontent-sin6-3.xx&oh=00_AfBwJfMAJxdb5j3AsX-n53fpTTSPXL0SVURy7JTx8cx8kQ&oe=63E06101"
            ).loader
          }
          alt="Gopay Image"
          className="rounded-full"
          src={
            GetImage(
              "https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/44582957_711921919175870_2005903401161850880_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGh30Y3LHcd3pwbEz6CBuHgyctnM-sgjTDJy2cz6yCNMDVrFBj7eFvjGHGhODxlE8kol9mLikzepF2j1IplhZJQ&_nc_ohc=uiiRMGQlDjUAX-WvLQ1&_nc_ht=scontent-sin6-3.xx&oh=00_AfBwJfMAJxdb5j3AsX-n53fpTTSPXL0SVURy7JTx8cx8kQ&oe=63E06101"
            ).image
          }
          width={30}
          height={20}
        />
      </div>
      Gopay
    </div>
  ),
};

function PaymentChoice({
  setShowModal,
  setDig,
}: {
  setShowModal: any;
  setDig: any;
}) {
  return (
    <div className={`flex flex-col items-center px-20 py-20`}>
      <div className="mb-[16px] p-[8px]">
        <div className="flex shadow-2xl rounded-2xl">
          <div className="w-[20rem] p-[20px]">
            <h1 className="font-bold text-lg text-center">Pembayaran</h1>
            <div className="items-center justify-center border-2 w-full border-black inline-block"></div>
            <div className="py-2">
              <h1 className="font-bold px-1">E-Wallet</h1>
              <div className="py-2">
                <Button
                  type="submit"
                  onClick={() => {
                    setDig("Gopay");
                    setShowModal(false);
                  }}
                >
                  {image.gopay}
                </Button>
              </div>
              <div className="py-2">
                <Button
                  type="submit"
                  onClick={() => {
                    setDig("Dana");
                    setShowModal(false);
                  }}
                >
                  {image.dana}
                </Button>
              </div>
            </div>
            <div className="float-right py-6">
              <div className="flex justify-between items-center w-full h-full">
                <Button
                  type="button"
                  onClick={() => {
                    setDig("Pembayaran");
                    setShowModal(false);
                  }}
                  className="flex bg-grey-400 text-black active:bg-white hover:bg-white justify-center items-center gap-2 font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentChoice;
