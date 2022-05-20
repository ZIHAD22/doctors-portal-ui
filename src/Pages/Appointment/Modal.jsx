import { format } from "date-fns";
import React from "react";
import { useForm } from "react-hook-form";

const Modal = ({ teretment, setTreatment, date }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: format(date, "PP"),
    },
  });

  const handleFormSubmit = (data) => {
    console.log(data);
    setTreatment({});
    reset();
  };

  return (
    <div>
      <input type="checkbox" id="appoinment-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="appoinment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{teretment.name}</h3>
          <form
            className="grid grid-cols-1 justify-items-center gap-2 my-3"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <input
              type="text"
              disabled
              {...register("date", { required: true })}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              {...register("slot", { required: true })}
              className="select select-bordered w-full max-w-xs"
            >
              {teretment.slots.map((slot) => (
                <option key={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Full Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              placeholder="Phone Number"
              {...register("number", { required: true, valueAsNumber: true })}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="input input-bordered w-full max-w-xs"
            />

            <button type="submit" className="btn w-full max-w-xs uppercase">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
