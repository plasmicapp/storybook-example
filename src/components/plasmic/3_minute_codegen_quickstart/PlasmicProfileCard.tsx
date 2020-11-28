// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bT6EcsXmTT3vsWeXT57vmK
// Component: NFdABpBluE1f
import * as React from "react";
import {
  hasVariant,
  classNames,
  Flex,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  PlasmicIcon,
  PlasmicSlot,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_3_minute_codegen_quickstart.css"; // plasmic-import: bT6EcsXmTT3vsWeXT57vmK/projectcss
import "./PlasmicProfileCard.css"; // plasmic-import: NFdABpBluE1f/css

import TwitterIcon from "./icons/PlasmicIcon__Twitter"; // plasmic-import: Y8Z_eKp1HLF6/icon
import FacebookIcon from "./icons/PlasmicIcon__Facebook"; // plasmic-import: vEckQK-fkfYH/icon
import GithubIcon from "./icons/PlasmicIcon__Github"; // plasmic-import: JobxWg6bDZcU/icon
import DribbbleIcon from "./icons/PlasmicIcon__Dribbble"; // plasmic-import: EOC6PUMIekdE/icon

export type PlasmicProfileCard__VariantMembers = {};
export type PlasmicProfileCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicProfileCard__VariantsArgs;
export const PlasmicProfileCard__VariantProps = new Array<VariantPropType>();

export type PlasmicProfileCard__ArgsType = {
  children?: React.ReactNode;
  name?: React.ReactNode;
  title?: React.ReactNode;
};

type ArgPropType = keyof PlasmicProfileCard__ArgsType;
export const PlasmicProfileCard__ArgProps = new Array<ArgPropType>(
  "children",
  "name",
  "title"
);

export type PlasmicProfileCard__OverridesType = {
  root?: Flex<"div">;
};

export interface DefaultProfileCardProps {
  children?: React.ReactNode;
  name?: React.ReactNode;
  title?: React.ReactNode;
  className?: string;
}

function PlasmicProfileCard__RenderFunc(props: {
  variants: PlasmicProfileCard__VariantsArgs;
  args: PlasmicProfileCard__ArgsType;
  overrides: PlasmicProfileCard__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames({
        ProfileCard__root__jp7BW: true,
        plasmic_default__all: true,
        plasmic_default__div: true,
        root_reset_bT6EcsXmTT3vsWeXT57vmK: true
      })}
    >
      <div
        className={classNames({
          ProfileCard__box__pafy: true,
          plasmic_default__all: true,
          plasmic_default__div: true
        })}
      >
        <div
          className={classNames({
            ProfileCard__box__vklyH: true,
            plasmic_default__all: true,
            plasmic_default__div: true
          })}
        >
          <div
            className={classNames({
              ProfileCard__box__ul0MG: true,
              plasmic_default__all: true,
              plasmic_default__div: true
            })}
          />
        </div>

        <div
          data-plasmic-wrap-flex-child={true}
          className={classNames({
            ProfileCard__box__caIY: true,
            plasmic_default__all: true,
            plasmic_default__div: true
          })}
        >
          <PlasmicSlot
            defaultContents={"Douglas Engelbart"}
            value={args.name}
            className={classNames({ ProfileCard__slotName__i7StX: true })}
          />

          <PlasmicSlot
            defaultContents={"Computer Scientist"}
            value={args.title}
            className={classNames({ ProfileCard__slotTitle__sj8Q8: true })}
          />

          <div
            className={classNames({
              ProfileCard__box__xQ3Wj: true,
              plasmic_default__all: true,
              plasmic_default__div: true
            })}
          >
            <PlasmicSlot
              defaultContents={
                "Best known for his work on founding the field of human–computer interaction, particularly while at his Augmentation Research Center Lab in SRI International, which resulted in creation of the computer mouse, and the development of hypertext, networked computers, and precursors to graphical user interfaces.\n"
              }
              value={args.children}
            />
          </div>
        </div>

        <div
          className={classNames({
            ProfileCard__box__uod9O: true,
            plasmic_default__all: true,
            plasmic_default__div: true
          })}
        >
          <div
            className={classNames({
              ProfileCard__box__xeuDq: true,
              plasmic_default__all: true,
              plasmic_default__div: true
            })}
          >
            <a
              className={classNames({
                ProfileCard__link__bVtaR: true,
                plasmic_default__a: true,
                plasmic_default__all: true
              })}
              href={"/" as const}
              title={"Twitter" as const}
            >
              <TwitterIcon
                className={classNames({
                  ProfileCard__svg__nbcgr: true,
                  plasmic_default__all: true,
                  plasmic_default__svg: true
                })}
                role={"img"}
                {...({} as any)}
              />
            </a>

            <a
              className={classNames({
                ProfileCard__link__j097V: true,
                plasmic_default__a: true,
                plasmic_default__all: true
              })}
              href={"/" as const}
              title={"Facebook" as const}
            >
              <FacebookIcon
                className={classNames({
                  ProfileCard__svg__gHiAn: true,
                  plasmic_default__all: true,
                  plasmic_default__svg: true
                })}
                role={"img"}
                {...({} as any)}
              />
            </a>

            <a
              className={classNames({
                ProfileCard__link__vtx9J: true,
                plasmic_default__a: true,
                plasmic_default__all: true
              })}
              href={"/" as const}
              title={"Github" as const}
            >
              <GithubIcon
                className={classNames({
                  ProfileCard__svg__zEzJw: true,
                  plasmic_default__all: true,
                  plasmic_default__svg: true
                })}
                role={"img"}
                {...({} as any)}
              />
            </a>

            <a
              className={classNames({
                ProfileCard__link__qbkoB: true,
                plasmic_default__a: true,
                plasmic_default__all: true
              })}
              href={"/" as const}
              title={"Dribbble" as const}
            >
              <DribbbleIcon
                className={classNames({
                  ProfileCard__svg__iTyFz: true,
                  plasmic_default__all: true,
                  plasmic_default__svg: true
                })}
                role={"img"}
                {...({} as any)}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProfileCard__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProfileCard__VariantsArgs;
    args?: PlasmicProfileCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & // Specify variants directly as props
  Omit<PlasmicProfileCard__VariantsArgs, ReservedPropsType> &
    // Specify args directly as props
    Omit<PlasmicProfileCard__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicProfileCard__ArgProps,
      internalVariantPropNames: PlasmicProfileCard__VariantProps
    });

    return PlasmicProfileCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProfileCard";
  } else {
    func.displayName = `PlasmicProfileCard.${nodeName}`;
  }
  return func;
}

export const PlasmicProfileCard = Object.assign(
  // Top-level PlasmicProfileCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicProfileCard
    internalVariantProps: PlasmicProfileCard__VariantProps,
    internalArgProps: PlasmicProfileCard__ArgProps
  }
);

export default PlasmicProfileCard;
/* prettier-ignore-end */
