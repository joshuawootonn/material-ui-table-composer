import React, { ReactNode, ReactElement } from "react";
import createReactContext, { Context } from "create-react-context";


interface ITooble {
  columns: any;
  data: any
}
export const defaultState: ITooble = {
  columns: [],
  data: []
}

const {Provider: ToobleProvider, Consumer: ToobleConsumer}: Context<ITooble> = createReactContext(defaultState);

export class Tooble extends React.Component<{value: ITooble} & { children: any} ,ITooble>{
  state = defaultState;
  render() {
    return (
      <ToobleProvider value={this.state}>        
        {this.props.children}
      </ToobleProvider>
    );
  }
}

export function ToobleWrapper(WrappedComponent: any) {
  return function Wrapper(props:any) {
      return(
        <ToobleConsumer>
          { value => (
            <WrappedComponent {...props} {...value} />
          )}
        </ToobleConsumer>
      )
    }
}

