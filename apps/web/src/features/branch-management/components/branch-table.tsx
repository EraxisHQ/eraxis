import {
  useBranches,
} from "../hooks/use-branches";

export default function BranchTable() {

  const branches =
    useBranches();

  return (
    <div>

      <h2>
        Branches
      </h2>

      {branches.map(
        (branch) => (
          <div
            key={branch.id}
          >

            <strong>
              {branch.code}
            </strong>

            {" - "}

            {branch.name}

          </div>
        )
      )}

    </div>
  );
}import {
  useBranches,
} from "../hooks/use-branches";

export default function BranchTable() {

  const branches =
    useBranches();

  return (
    <div>

      <h2>
        Branches
      </h2>

      {branches.map(
        (branch) => (
          <div
            key={branch.id}
          >

            <strong>
              {branch.code}
            </strong>

            {" - "}

            {branch.name}

          </div>
        )
      )}

    </div>
  );
}
