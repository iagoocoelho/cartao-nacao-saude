import React, { useEffect, useRef, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { MainContainer } from "components/container/MainContainer";
import CardPackage from "./cardPackage";
import { connect } from "react-redux";
import * as packagesActions from "store/packages/actions";
import { replaceOnlyNumber } from "common/utils";
import "./oursPackagesContainer.scss";

export const OursPackagesContainer = ({
  packagesRequest,
  packagesState,
  auth_state,
}) => {
  const isFirstRender = useRef(true);
  const { search } = useLocation();
  const [packages, setPackages] = useState([]);
  const [vendorId, setVendorId] = useState("");

  useMemo(() => {
    if (search) setVendorId(replaceOnlyNumber(search));
  }, [search]);

  useEffect(() => {
    if (!packagesState.loading && !!packagesState.packages.length) {
      setPackages(packagesState.packages);
    }
  }, [packagesState.loading, packagesState.packages]);

  useEffect(() => {
    if (
      isFirstRender.current ||
      (packagesState.packages.length === 0 &&
        (auth_state.success || auth_state.tokenVerify.success))
    ) {
      isFirstRender.current = false;
      packagesRequest();
    }
  }, [
    packagesRequest,
    packagesState.packages.length,
    auth_state.success,
    auth_state.tokenVerify.success,
  ]);

  return (
    <div className="ours-packages" id="pacotes">
      <MainContainer>
        <div className="col">
          <h2 className="fs-2 title text-center">Nossos Pacotes</h2>

          <div className="packages-container">
            {!!packages.length &&
              packages.map((item) => {
                if (item.active) {
                  return (
                    <CardPackage
                      key={item.id}
                      data={{ ...item, vendor_cpf: vendorId }}
                    />
                  );
                } else {
                  return false;
                }
              })}
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    packagesState: state.packages.data,
    auth_state: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    packagesRequest: () => {
      dispatch(packagesActions.packagesRequest());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OursPackagesContainer);
