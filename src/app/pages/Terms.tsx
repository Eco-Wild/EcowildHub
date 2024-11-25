import Modal from '../../components/Modal';

interface Props {
  setShowTerms: React.Dispatch<React.SetStateAction<boolean>>;
  handleAgreement: () => void;
}

const Terms = ({ setShowTerms, handleAgreement }: Props) => {
  return (
    <Modal>
      <section className='p-6 overflow-y-scroll bg-white'>
        <h2 className='font-bold text-primary-400 my-4'>
          Terms and Conditions
        </h2>
        <p className='text-secondary-200'>
          By using EcoWildHub, you agree to our Terms and Conditions, which
          outline the use of our conservation-focused platform, account
          security, and user responsibilities. EcoWildHub retains ownership of
          all content, and you may only use it with permission. Donations are
          welcomed to support conservation efforts and are generally
          non-refundable. We reserve the right to modify these terms, and by
          continuing to use the platform, you accept any updates. For any
          questions, reach out to us at contact@ecowildhub.com. Thank you for
          joining us in our mission to protect wildlife and nature!
        </p>
        <div className='flex justify-end items-center gap-5 my-5 font-semibold'>
          <button
            type='button'
            className='text-primary-400 text-sm hover:opacity-75'
            onClick={() => setShowTerms(false)}
          >
            Cancel
          </button>
          <button
            type='button'
            className='text-sm bg-primary-400 text-white h-9 py-2 px-9 rounded-[5px] hover:opacity-90'
            onClick={handleAgreement}
          >
            Agree
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default Terms;
