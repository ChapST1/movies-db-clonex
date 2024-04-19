import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import {Suspense} from "react";

import {Error} from "@/components/error";
import {Modal} from "@/components/ui/modal";
import {PersonDetailModal} from "@/components/details/person-details-modal";

export default function ModalPersonDetailsPage({params: {id}}: {params: {id: number}}) {
  return (
    <Modal className="items-start">
      <ErrorBoundary errorComponent={Error}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <PersonDetailModal id={id} />
        </Suspense>
      </ErrorBoundary>
    </Modal>
  );
}
