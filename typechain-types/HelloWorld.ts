/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface HelloWorldInterface extends utils.Interface {
  functions: {
    "message()": FunctionFragment;
    "update(string)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "message" | "update"): FunctionFragment;

  encodeFunctionData(functionFragment: "message", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "update",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "message", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;

  events: {
    "UpdatedMessages(string,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "UpdatedMessages"): EventFragment;
}

export interface UpdatedMessagesEventObject {
  oldStr: string;
  newStr: string;
}
export type UpdatedMessagesEvent = TypedEvent<
  [string, string],
  UpdatedMessagesEventObject
>;

export type UpdatedMessagesEventFilter = TypedEventFilter<UpdatedMessagesEvent>;

export interface HelloWorld extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HelloWorldInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    message(overrides?: CallOverrides): Promise<[string]>;

    update(
      newMessage: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  message(overrides?: CallOverrides): Promise<string>;

  update(
    newMessage: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    message(overrides?: CallOverrides): Promise<string>;

    update(
      newMessage: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "UpdatedMessages(string,string)"(
      oldStr?: null,
      newStr?: null
    ): UpdatedMessagesEventFilter;
    UpdatedMessages(oldStr?: null, newStr?: null): UpdatedMessagesEventFilter;
  };

  estimateGas: {
    message(overrides?: CallOverrides): Promise<BigNumber>;

    update(
      newMessage: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    message(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    update(
      newMessage: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
